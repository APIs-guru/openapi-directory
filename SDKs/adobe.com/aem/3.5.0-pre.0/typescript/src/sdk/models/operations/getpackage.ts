import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPackagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetPackageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPackagePathParams;
}


export class GetPackageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPackageDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
