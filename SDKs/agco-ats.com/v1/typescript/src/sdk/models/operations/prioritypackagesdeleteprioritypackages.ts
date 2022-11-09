import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PriorityPackagesDeletePriorityPackagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PriorityPackagesDeletePriorityPackagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PriorityPackagesDeletePriorityPackagesPathParams;
}


export class PriorityPackagesDeletePriorityPackagesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
