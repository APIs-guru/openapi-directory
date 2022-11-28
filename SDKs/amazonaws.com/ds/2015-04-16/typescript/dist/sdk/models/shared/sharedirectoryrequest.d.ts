import { SpeakeasyBase } from "../../../internal/utils";
import { ShareMethodEnum } from "./sharemethodenum";
import { ShareTarget } from "./sharetarget";
export declare class ShareDirectoryRequest extends SpeakeasyBase {
    directoryId: string;
    shareMethod: ShareMethodEnum;
    shareNotes?: string;
    shareTarget: ShareTarget;
}
