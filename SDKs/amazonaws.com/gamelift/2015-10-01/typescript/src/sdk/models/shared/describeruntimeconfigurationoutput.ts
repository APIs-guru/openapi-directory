import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeConfiguration } from "./runtimeconfiguration";


// DescribeRuntimeConfigurationOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeRuntimeConfigurationOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=RuntimeConfiguration" })
  runtimeConfiguration?: RuntimeConfiguration;
}
