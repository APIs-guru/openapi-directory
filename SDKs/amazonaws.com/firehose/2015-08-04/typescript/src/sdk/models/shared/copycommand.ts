import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CopyCommand
/** 
 * Describes a <code>COPY</code> command for Amazon Redshift.
**/
export class CopyCommand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CopyOptions" })
  copyOptions?: string;

  @SpeakeasyMetadata({ data: "json, name=DataTableColumns" })
  dataTableColumns?: string;

  @SpeakeasyMetadata({ data: "json, name=DataTableName" })
  dataTableName: string;
}
