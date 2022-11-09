import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttemptStatusEnum } from "./attemptstatusenum";


export class AttemptRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesSynced" })
  bytesSynced?: number;

  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=endedAt" })
  endedAt?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=recordsSynced" })
  recordsSynced?: number;

  @Metadata({ data: "json, name=status" })
  status: AttemptStatusEnum;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: number;
}
