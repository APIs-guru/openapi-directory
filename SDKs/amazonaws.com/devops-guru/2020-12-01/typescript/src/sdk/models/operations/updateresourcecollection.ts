import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateResourceCollectionHeaders extends SpeakeasyBase {
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

export enum UpdateResourceCollectionRequestBodyActionEnum {
    Add = "ADD",
    Remove = "REMOVE"
}


// UpdateResourceCollectionRequestBodyResourceCollection
/** 
 *  Contains information used to update a collection of AWS resources. 
**/
export class UpdateResourceCollectionRequestBodyResourceCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudFormation" })
  cloudFormation?: shared.UpdateCloudFormationCollectionFilter;
}


export class UpdateResourceCollectionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: UpdateResourceCollectionRequestBodyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceCollection" })
  resourceCollection: UpdateResourceCollectionRequestBodyResourceCollection;
}


export class UpdateResourceCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateResourceCollectionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateResourceCollectionRequestBody;
}


export class UpdateResourceCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateResourceCollectionResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  validationException?: any;
}
