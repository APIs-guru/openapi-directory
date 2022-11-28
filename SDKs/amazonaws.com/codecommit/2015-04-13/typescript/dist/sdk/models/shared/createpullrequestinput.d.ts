import { SpeakeasyBase } from "../../../internal/utils";
import { Target } from "./target";
export declare class CreatePullRequestInput extends SpeakeasyBase {
    clientRequestToken?: string;
    description?: string;
    targets: Target[];
    title: string;
}
