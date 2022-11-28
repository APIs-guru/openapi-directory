import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPackageFilterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetPackageFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPackageFilterPathParams;
}


export class GetPackageFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPackageFilterDefaultApplicationJsonString?: string;
}
