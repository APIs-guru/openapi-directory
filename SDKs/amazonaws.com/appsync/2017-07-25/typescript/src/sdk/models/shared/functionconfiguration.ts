import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SyncConfig } from "./syncconfig";


// FunctionConfiguration
/** 
 * A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=functionArn" })
  functionArn?: string;

  @Metadata({ data: "json, name=functionId" })
  functionId?: string;

  @Metadata({ data: "json, name=functionVersion" })
  functionVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @Metadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @Metadata({ data: "json, name=syncConfig" })
  syncConfig?: SyncConfig;
}
