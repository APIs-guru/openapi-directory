import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFunction20200531PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Name" })
  name: string;
}

export enum DescribeFunction20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}


export class DescribeFunction20200531QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Stage" })
  stage?: DescribeFunction20200531StageEnum;
}


export class DescribeFunction20200531Headers extends SpeakeasyBase {
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


export class DescribeFunction20200531Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DescribeFunction20200531PathParams;

  @SpeakeasyMetadata()
  queryParams: DescribeFunction20200531QueryParams;

  @SpeakeasyMetadata()
  headers: DescribeFunction20200531Headers;
}


export class DescribeFunction20200531Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
