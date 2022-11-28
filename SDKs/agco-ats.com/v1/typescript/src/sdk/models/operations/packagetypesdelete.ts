import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackageTypesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ID" })
  id: string;
}


export class PackageTypesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PackageTypesDeletePathParams;
}


export class PackageTypesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
