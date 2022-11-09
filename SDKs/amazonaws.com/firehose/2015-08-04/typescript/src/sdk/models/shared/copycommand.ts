import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CopyCommand
/** 
 * Describes a <code>COPY</code> command for Amazon Redshift.
**/
export class CopyCommand extends SpeakeasyBase {
  @Metadata({ data: "json, name=CopyOptions" })
  copyOptions?: string;

  @Metadata({ data: "json, name=DataTableColumns" })
  dataTableColumns?: string;

  @Metadata({ data: "json, name=DataTableName" })
  dataTableName: string;
}
