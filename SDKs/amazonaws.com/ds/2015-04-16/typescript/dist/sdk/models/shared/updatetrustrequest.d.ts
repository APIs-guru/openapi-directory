import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SelectiveAuthEnum } from "./selectiveauthenum";
export declare class UpdateTrustRequest extends SpeakeasyBase {
    selectiveAuth?: SelectiveAuthEnum;
    trustId: string;
}
