import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImagePackage } from "./imagepackage";
export declare class ListImagePackagesResponse extends SpeakeasyBase {
    imagePackageList?: ImagePackage[];
    nextToken?: string;
    requestId?: string;
}
