import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePackage } from "./imagepackage";



export class ListImagePackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePackageList", elemType: ImagePackage })
  imagePackageList?: ImagePackage[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
