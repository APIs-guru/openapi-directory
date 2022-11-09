import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasLifecycleEnum } from "./aliaslifecycleenum";


// Alias
/** 
 * A DNS alias that is associated with the file system. You can use a DNS alias to access a file system using user-defined DNS names, in addition to the default DNS name that Amazon FSx assigns to the file system. For more information, see <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-dns-aliases.html">DNS aliases</a> in the <i>FSx for Windows File Server User Guide</i>.
**/
export class Alias extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lifecycle" })
  lifecycle?: AliasLifecycleEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
