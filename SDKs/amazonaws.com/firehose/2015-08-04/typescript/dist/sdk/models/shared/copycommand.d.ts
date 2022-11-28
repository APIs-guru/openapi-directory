import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a <code>COPY</code> command for Amazon Redshift.
**/
export declare class CopyCommand extends SpeakeasyBase {
    copyOptions?: string;
    dataTableColumns?: string;
    dataTableName: string;
}
