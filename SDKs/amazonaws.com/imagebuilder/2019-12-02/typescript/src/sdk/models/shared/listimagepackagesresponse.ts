import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImagePackage } from "./imagepackage";


export class ListImagePackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePackageList", elemType: shared.ImagePackage })
  imagePackageList?: ImagePackage[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
