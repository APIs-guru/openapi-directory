import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";



// ConnectionInput
/** 
 * A structure that is used to specify a connection to create or update.
**/
export class ConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionProperties" })
  connectionProperties: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ConnectionType" })
  connectionType: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=PhysicalConnectionRequirements" })
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
