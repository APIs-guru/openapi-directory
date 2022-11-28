import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PackageTypetoBundlesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=BundleID" })
  bundleId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PackageTypeID" })
  packageTypeId: string;
}


export class PackageTypetoBundlesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PackageTypetoBundlesDeleteQueryParams;
}


export class PackageTypetoBundlesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
