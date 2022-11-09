import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAssociateTrunkInterfaceActionEnum {
    AssociateTrunkInterface = "AssociateTrunkInterface"
}

export enum GetAssociateTrunkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetAssociateTrunkInterfaceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAssociateTrunkInterfaceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=BranchInterfaceId" })
  branchInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=GreKey" })
  greKey?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TrunkInterfaceId" })
  trunkInterfaceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAssociateTrunkInterfaceVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VlanId" })
  vlanId?: number;
}


export class GetAssociateTrunkInterfaceHeaders extends SpeakeasyBase {
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


export class GetAssociateTrunkInterfaceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAssociateTrunkInterfaceQueryParams;

  @Metadata()
  headers: GetAssociateTrunkInterfaceHeaders;
}


export class GetAssociateTrunkInterfaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
