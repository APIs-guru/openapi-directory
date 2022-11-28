import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}


// GetReplaceIamInstanceProfileAssociationIamInstanceProfile
/** 
 * Describes an IAM instance profile.
**/
export class GetReplaceIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=Name" })
  name?: string;
}

export enum GetReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceIamInstanceProfileAssociationActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IamInstanceProfile" })
  iamInstanceProfile: GetReplaceIamInstanceProfileAssociationIamInstanceProfile;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceIamInstanceProfileAssociationVersionEnum;
}


export class GetReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
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


export class GetReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReplaceIamInstanceProfileAssociationQueryParams;

  @SpeakeasyMetadata()
  headers: GetReplaceIamInstanceProfileAssociationHeaders;
}


export class GetReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
