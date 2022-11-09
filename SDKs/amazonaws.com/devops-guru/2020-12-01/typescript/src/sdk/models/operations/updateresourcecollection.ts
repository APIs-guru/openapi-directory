import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateResourceCollectionHeaders extends SpeakeasyBase {
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

export enum UpdateResourceCollectionRequestBodyActionEnum {
    Add = "ADD"
,    Remove = "REMOVE"
}


// UpdateResourceCollectionRequestBodyResourceCollection
/** 
 *  Contains information used to update a collection of AWS resources. 
**/
export class UpdateResourceCollectionRequestBodyResourceCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=CloudFormation" })
  cloudFormation?: shared.UpdateCloudFormationCollectionFilter;
}


export class UpdateResourceCollectionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: UpdateResourceCollectionRequestBodyActionEnum;

  @Metadata({ data: "json, name=ResourceCollection" })
  resourceCollection: UpdateResourceCollectionRequestBodyResourceCollection;
}


export class UpdateResourceCollectionRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateResourceCollectionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateResourceCollectionRequestBody;
}


export class UpdateResourceCollectionResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  updateResourceCollectionResponse?: Map<string, any>;

  @Metadata()
  validationException?: any;
}
