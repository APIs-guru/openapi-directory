import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PackageTypetoBundlesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=BundleID" })
  bundleId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PackageTypeID" })
  packageTypeId: string;
}


export class PackageTypetoBundlesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PackageTypetoBundlesDeleteQueryParams;
}


export class PackageTypetoBundlesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
