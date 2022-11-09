import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPackageFilterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetPackageFilterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPackageFilterPathParams;
}


export class GetPackageFilterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPackageFilterDefaultApplicationJsonString?: string;
}
