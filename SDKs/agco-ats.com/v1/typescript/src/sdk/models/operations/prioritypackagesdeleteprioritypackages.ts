import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PriorityPackagesDeletePriorityPackagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PriorityPackagesDeletePriorityPackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PriorityPackagesDeletePriorityPackagesPathParams;
}


export class PriorityPackagesDeletePriorityPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
