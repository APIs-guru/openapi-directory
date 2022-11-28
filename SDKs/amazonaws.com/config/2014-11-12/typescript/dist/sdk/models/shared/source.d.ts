import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerEnum } from "./ownerenum";
import { SourceDetail } from "./sourcedetail";
/**
 * Provides the Config rule owner (Amazon Web Services or customer), the rule identifier, and the events that trigger the evaluation of your Amazon Web Services resources.
**/
export declare class Source extends SpeakeasyBase {
    owner: OwnerEnum;
    sourceDetails?: SourceDetail[];
    sourceIdentifier: string;
}
