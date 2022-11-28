import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvalidInputProperty } from "./invalidinputproperty";



export class InvalidInputExceptionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exceptionClassName" })
  exceptionClassName?: string;

  @SpeakeasyMetadata({ data: "json, name=exceptionStack" })
  exceptionStack?: string[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=validationErrors", elemType: InvalidInputProperty })
  validationErrors: InvalidInputProperty[];
}
