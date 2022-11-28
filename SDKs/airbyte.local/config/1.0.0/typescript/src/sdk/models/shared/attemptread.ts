import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttemptStatusEnum } from "./attemptstatusenum";



export class AttemptRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesSynced" })
  bytesSynced?: number;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=endedAt" })
  endedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=recordsSynced" })
  recordsSynced?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: AttemptStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: number;
}
