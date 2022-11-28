import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KernelCapabilities
/** 
 * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker. For more information on the default capabilities and the non-default available capabilities, see <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">Runtime privilege and Linux capabilities</a> in the <i>Docker run reference</i>. For more detailed information on these Linux capabilities, see the <a href="http://man7.org/linux/man-pages/man7/capabilities.7.html">capabilities(7)</a> Linux manual page.
**/
export class KernelCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: string[];

  @SpeakeasyMetadata({ data: "json, name=drop" })
  drop?: string[];
}
