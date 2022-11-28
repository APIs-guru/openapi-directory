import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyncConfig } from "./syncconfig";



// FunctionConfiguration
/** 
 * A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
**/
export class FunctionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=functionArn" })
  functionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=functionId" })
  functionId?: string;

  @SpeakeasyMetadata({ data: "json, name=functionVersion" })
  functionVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMappingTemplate" })
  requestMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=responseMappingTemplate" })
  responseMappingTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=syncConfig" })
  syncConfig?: SyncConfig;
}
