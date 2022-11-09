import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListDistributionsByOriginRequestPolicyId20200531PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=OriginRequestPolicyId" })
  originRequestPolicyId: string;
}


export class ListDistributionsByOriginRequestPolicyId20200531QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxItems" })
  maxItems?: string;
}


export class ListDistributionsByOriginRequestPolicyId20200531Headers extends SpeakeasyBase {
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


export class ListDistributionsByOriginRequestPolicyId20200531Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ListDistributionsByOriginRequestPolicyId20200531PathParams;

  @Metadata()
  queryParams: ListDistributionsByOriginRequestPolicyId20200531QueryParams;

  @Metadata()
  headers: ListDistributionsByOriginRequestPolicyId20200531Headers;
}


export class ListDistributionsByOriginRequestPolicyId20200531Response extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
