import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { PhysicalConnectionRequirements } from "./physicalconnectionrequirements";



// Connection
/** 
 * Defines a connection to a data source.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionProperties" })
  connectionProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ConnectionType" })
  connectionType?: ConnectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedBy" })
  lastUpdatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MatchCriteria" })
  matchCriteria?: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhysicalConnectionRequirements" })
  physicalConnectionRequirements?: PhysicalConnectionRequirements;
}
