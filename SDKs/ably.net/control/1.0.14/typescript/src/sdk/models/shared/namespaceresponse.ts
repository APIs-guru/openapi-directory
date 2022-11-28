import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticated" })
  authenticated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: number;

  @SpeakeasyMetadata({ data: "json, name=persistLast" })
  persistLast?: boolean;

  @SpeakeasyMetadata({ data: "json, name=persisted" })
  persisted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pushEnabled" })
  pushEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tlsOnly" })
  tlsOnly?: boolean;
}
