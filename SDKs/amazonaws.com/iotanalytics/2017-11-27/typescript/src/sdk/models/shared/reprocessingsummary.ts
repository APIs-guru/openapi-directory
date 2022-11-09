import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReprocessingStatusEnum } from "./reprocessingstatusenum";


// ReprocessingSummary
/** 
 * Information about pipeline reprocessing.
**/
export class ReprocessingSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReprocessingStatusEnum;
}
