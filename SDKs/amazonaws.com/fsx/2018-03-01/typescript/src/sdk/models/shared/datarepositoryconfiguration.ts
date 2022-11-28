import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";



// DataRepositoryConfiguration
/** 
 * The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
**/
export class DataRepositoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ExportPath" })
  exportPath?: string;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: DataRepositoryFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=ImportPath" })
  importPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ImportedFileChunkSize" })
  importedFileChunkSize?: number;

  @SpeakeasyMetadata({ data: "json, name=Lifecycle" })
  lifecycle?: DataRepositoryLifecycleEnum;
}
