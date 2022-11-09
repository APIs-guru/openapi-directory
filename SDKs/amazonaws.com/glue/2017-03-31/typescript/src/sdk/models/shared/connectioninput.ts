import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";


// ConnectionInput
/** 
 * A structure that is used to specify a connection to create or update.
**/
export class ConnectionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionProperties" })
  connectionProperties: Map<string, string>;

  @Metadata({ data: "json, name=ConnectionType" })
  connectionType: ConnectionTypeEnum;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=PhysicalConnectionRequirements" })
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
