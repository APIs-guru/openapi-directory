import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeleteSecurityGroupActionEnum {
    DeleteSecurityGroup = "DeleteSecurityGroup"
}

export enum GetDeleteSecurityGroupVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetDeleteSecurityGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeleteSecurityGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupId" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GroupName" })
  groupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeleteSecurityGroupVersionEnum;
}


export class GetDeleteSecurityGroupHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDeleteSecurityGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeleteSecurityGroupQueryParams;

  @Metadata()
  headers: GetDeleteSecurityGroupHeaders;
}


export class GetDeleteSecurityGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
