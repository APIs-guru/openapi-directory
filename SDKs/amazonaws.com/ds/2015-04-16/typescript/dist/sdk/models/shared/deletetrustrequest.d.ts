import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
**/
export declare class DeleteTrustRequest extends SpeakeasyBase {
    deleteAssociatedConditionalForwarder?: boolean;
    trustId: string;
}
