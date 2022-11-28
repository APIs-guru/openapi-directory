import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactStatusEnum } from "./contactstatusenum";
import { DataflowDetail } from "./dataflowdetail";
import { Elevation } from "./elevation";



// DescribeContactResponse
/** 
 * <p/>
**/
export class DescribeContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactId" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=contactStatus" })
  contactStatus?: ContactStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=dataflowList", elemType: DataflowDetail })
  dataflowList?: DataflowDetail[];

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=groundStation" })
  groundStation?: string;

  @SpeakeasyMetadata({ data: "json, name=maximumElevation" })
  maximumElevation?: Elevation;

  @SpeakeasyMetadata({ data: "json, name=missionProfileArn" })
  missionProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=postPassEndTime" })
  postPassEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=prePassStartTime" })
  prePassStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
