import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReplaceNetworkAclAssociationActionEnum {
    ReplaceNetworkAclAssociation = "ReplaceNetworkAclAssociation"
}

export enum GetReplaceNetworkAclAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceNetworkAclAssociationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceNetworkAclAssociationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NetworkAclId" })
  networkAclId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceNetworkAclAssociationVersionEnum;
}


export class GetReplaceNetworkAclAssociationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetReplaceNetworkAclAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReplaceNetworkAclAssociationQueryParams;

  @SpeakeasyMetadata()
  headers: GetReplaceNetworkAclAssociationHeaders;
}


export class GetReplaceNetworkAclAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
