import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReplaceNetworkAclAssociationActionEnum {
    ReplaceNetworkAclAssociation = "ReplaceNetworkAclAssociation"
}

export enum GetReplaceNetworkAclAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceNetworkAclAssociationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceNetworkAclAssociationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceNetworkAclAssociationVersionEnum;
}


export class GetReplaceNetworkAclAssociationHeaders extends SpeakeasyBase {
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


export class GetReplaceNetworkAclAssociationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReplaceNetworkAclAssociationQueryParams;

  @Metadata()
  headers: GetReplaceNetworkAclAssociationHeaders;
}


export class GetReplaceNetworkAclAssociationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
