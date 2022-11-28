import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentStatusEnum } from "./environmentstatusenum";



export class DescribeEnvironmentStatusResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: EnvironmentStatusEnum;
}
