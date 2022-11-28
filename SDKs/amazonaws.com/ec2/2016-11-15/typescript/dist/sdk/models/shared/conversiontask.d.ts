import { SpeakeasyBase } from "../../../internal/utils";
import { ImportInstanceTaskDetails } from "./importinstancetaskdetails";
import { ImportVolumeTaskDetails } from "./importvolumetaskdetails";
import { ConversionTaskStateEnum } from "./conversiontaskstateenum";
import { Tag } from "./tag";
/**
 * Describes a conversion task.
**/
export declare class ConversionTask extends SpeakeasyBase {
    conversionTaskId?: string;
    expirationTime?: string;
    importInstance?: ImportInstanceTaskDetails;
    importVolume?: ImportVolumeTaskDetails;
    state?: ConversionTaskStateEnum;
    statusMessage?: string;
    tags?: Tag[];
}
