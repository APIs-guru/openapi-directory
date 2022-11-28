import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGraphqlApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class GetGraphqlApiHeaders extends SpeakeasyBase {
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


export class GetGraphqlApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGraphqlApiPathParams;

  @SpeakeasyMetadata()
  headers: GetGraphqlApiHeaders;
}


export class GetGraphqlApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getGraphqlApiResponse?: shared.GetGraphqlApiResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
