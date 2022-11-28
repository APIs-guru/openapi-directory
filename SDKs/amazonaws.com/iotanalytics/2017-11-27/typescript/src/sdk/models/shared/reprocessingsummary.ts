import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReprocessingStatusEnum } from "./reprocessingstatusenum";



// ReprocessingSummary
/** 
 * Information about pipeline reprocessing.
**/
export class ReprocessingSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReprocessingStatusEnum;
}
