import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";



// DescribeRuntimeConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeRuntimeConfigurationOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
