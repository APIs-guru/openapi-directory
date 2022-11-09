import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPackagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetPackageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPackagePathParams;
}


export class GetPackageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPackageDefaultApplicationOctetStreamBinaryString?: Uint8Array;
}
