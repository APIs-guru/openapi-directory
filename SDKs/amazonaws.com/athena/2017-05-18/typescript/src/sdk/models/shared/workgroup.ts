import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkGroupConfiguration } from "./workgroupconfiguration";
import { WorkGroupStateEnum } from "./workgroupstateenum";



// WorkGroup
/** 
 * A workgroup, which contains a name, description, creation time, state, and other configuration, listed under <a>WorkGroup$Configuration</a>. Each workgroup enables you to isolate queries for you or your group of users from other queries in the same account, to configure the query results location and the encryption configuration (known as workgroup settings), to enable sending query metrics to Amazon CloudWatch, and to establish per-query data usage control limits for all queries in a workgroup. The workgroup settings override is specified in <code>EnforceWorkGroupConfiguration</code> (true/false) in the <code>WorkGroupConfiguration</code>. See <a>WorkGroupConfiguration$EnforceWorkGroupConfiguration</a>.
**/
export class WorkGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: WorkGroupConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: WorkGroupStateEnum;
}
