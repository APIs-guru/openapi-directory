import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}


// GetReplaceIamInstanceProfileAssociationIamInstanceProfile
/** 
 * Describes an IAM instance profile.
**/
export class GetReplaceIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=Arn" })
  arn?: string;

  @Metadata({ data: "queryParam, name=Name" })
  name?: string;
}

export enum GetReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}


export class GetReplaceIamInstanceProfileAssociationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetReplaceIamInstanceProfileAssociationActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AssociationId" })
  associationId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IamInstanceProfile" })
  iamInstanceProfile: GetReplaceIamInstanceProfileAssociationIamInstanceProfile;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetReplaceIamInstanceProfileAssociationVersionEnum;
}


export class GetReplaceIamInstanceProfileAssociationHeaders extends SpeakeasyBase {
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


export class GetReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReplaceIamInstanceProfileAssociationQueryParams;

  @Metadata()
  headers: GetReplaceIamInstanceProfileAssociationHeaders;
}


export class GetReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
