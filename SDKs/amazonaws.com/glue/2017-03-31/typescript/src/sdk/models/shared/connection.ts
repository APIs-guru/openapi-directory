import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";


// Connection
/** 
 * Defines a connection to a data source.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionProperties" })
  connectionProperties?: Map<string, string>;

  @Metadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=LastUpdatedBy" })
  lastUpdatedBy?: string;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PhysicalConnectionRequirements" })
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
