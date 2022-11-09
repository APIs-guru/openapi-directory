import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoImportPolicyTypeEnum } from "./autoimportpolicytypeenum";
import { DataRepositoryFailureDetails } from "./datarepositoryfailuredetails";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";


// DataRepositoryConfiguration
/** 
 * The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
**/
export class DataRepositoryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoImportPolicy" })
  autoImportPolicy?: AutoImportPolicyTypeEnum;

  @Metadata({ data: "json, name=ExportPath" })
  exportPath?: string;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: DataRepositoryFailureDetails;

  @Metadata({ data: "json, name=ImportPath" })
  importPath?: string;

  @Metadata({ data: "json, name=ImportedFileChunkSize" })
  importedFileChunkSize?: number;

  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: DataRepositoryLifecycleEnum;
}
